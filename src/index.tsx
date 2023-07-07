import { Navigator } from '@infrastructure/navigation';
import { theme } from '@infrastructure/theme';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

function ExpensesApp() {
  return (
    <ThemeProvider theme={theme}>
      <Navigator />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

export default ExpensesApp;
