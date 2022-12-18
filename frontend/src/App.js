import { Routes, Route, Navigate, BrowserRouter, Outlet } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material"
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import NotFound from "./components/NotFound"
import Profile from "./components/Profile"

let isAuthenticated = false
const ProtectedRoute = () => {
  return (
    isAuthenticated ? (
      <Outlet />
    ) : (
      <Navigate to='/login' replace />
    )
  )
}
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter >
    </ThemeProvider>
  );
}

export default App;
