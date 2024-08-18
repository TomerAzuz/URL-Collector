import csrf from 'csurf';

export const csrfProtection = csrf({
  cookie: {
    key: '_csrf',
    httpOnly: true,
    sameSite: 'strict',
    secure: true,
  },
  secret: process.env.CSRF_SECRET,
});
