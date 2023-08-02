import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { Navigator } from '@infrastructure/navigation';
import { theme } from '@infrastructure/theme';
import { AuthenticationProvider } from '@services/auth/authContext';

function ExpensesApp() {
  return (
    <ThemeProvider theme={theme}>
      <AuthenticationProvider>
        <Navigator />
      </AuthenticationProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

export default ExpensesApp;
