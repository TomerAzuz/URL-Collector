import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { corsOptions } from './config/corsConfig.js';
import { limiter } from './config/rateLimit.js';
import { csrfProtection } from './middleware/csrfProtection.js';
import { errorHandler } from './middleware/errorHandler.js';
import metadataRoutes from './routes/metadataRoutes.js';
import csrfRoutes from './routes/csrfRoutes.js';
import staticRoutes from './routes/staticRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "img-src": ["'self'", "data:", "https:", "http:"]
      }
    }
  })
);
app.use(limiter);
app.use(csrfProtection);

app.use('/api', metadataRoutes);
app.use('/api', csrfRoutes);
app.use(staticRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
