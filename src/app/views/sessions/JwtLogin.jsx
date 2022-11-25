import { LoadingButton } from '@mui/lab';
import { Card, Checkbox, Grid, TextField } from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import { Paragraph } from 'app/components/Typography';
import useAuth from 'app/hooks/useAuth';
import { Formik } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(Box)(() => ({
  height: '100%',
  padding: '24px',
  position: 'relative',
  background: 'rgba(0, 0, 0, 0.01)',
}));

const JWTRoot = styled(JustifyBox)(() => ({
  // background: '#6876b0',
  backgroundImage: "url('/assets/images/backgroundLogo.jpg')",
  minHeight: '100% !important',
  '& .card': {
    maxWidth: 500,
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
  },
}));

// inital login credentials
const initialValues = {
  userName: '',
  password: '',
  remember: true,
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be 6 character length')
    .required('Password is required!'),
  userName: Yup.string()
    .min(3, 'User Name must be 3 character length')
    .required('User Name is required!'),
});

const JwtLogin = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      await login(values.userName, values.password);
      navigate('/');
    } catch (e) {
      setLoading(false);
    }
  };
  // const handleChange = () => {

  // }
  return (
    <JWTRoot>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <JustifyBox p={4} height="100%" sx={{ minWidth: 320 }} className="ml-5">
              <img src="/assets/images/crmloginlogo.png" width="100%" alt="" />
            </JustifyBox>
          </Grid>
        </Grid>
        <Grid item sm={6} xs={12}>
          <ContentBox>
            <Formik
              onSubmit={handleFormSubmit}
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    size="small"
                    type="text"
                    name="userName"
                    label="UserName"
                    variant="outlined"
                    onBlur={handleBlur}
                    value={values.userName}
                    onChange={handleChange}
                    helperText={touched.userName && errors.userName}
                    error={Boolean(errors.userName && touched.userName)}
                    sx={{ mb: 3 }}
                  />

                  <TextField
                    fullWidth
                    size="small"
                    name="password"
                    type="password"
                    label="Password"
                    variant="outlined"
                    onBlur={handleBlur}
                    value={values.password}
                    onChange={handleChange}
                    helperText={touched.password && errors.password}
                    error={Boolean(errors.password && touched.password)}
                    sx={{ mb: 1.5 }}
                  />

                  <FlexBox justifyContent="space-between">
                    <FlexBox gap={1}>
                      <Checkbox
                        size="small"
                        name="remember"
                        onChange={handleChange}
                        checked={values.remember}
                        sx={{ padding: 0 }}
                      />

                      <Paragraph>Remember Me</Paragraph>
                    </FlexBox>

                    {/* <NavLink
                        to="/session/forgot-password"
                        style={{ color: theme.palette.primary.main }}
                      >
                        Forgot password?
                      </NavLink> */}
                  </FlexBox>

                  <LoadingButton
                    style={{ marginLeft: "140px" }}
                    type="submit"
                    color="primary"
                    loading={loading}
                    variant="contained"
                    sx={{ my: 2 }}
                  >
                    Login
                  </LoadingButton>

                  {/* <Paragraph>
                      Don't have an account?
                      <NavLink
                        to="/session/signup"
                        style={{ color: theme.palette.primary.main, marginLeft: 5 }}
                      >
                        Register
                      </NavLink>
                    </Paragraph> */}
                </form>
              )}
            </Formik>
          </ContentBox>

        </Grid>
      </Card>
    </JWTRoot>
  );
};

export default JwtLogin;
