import { useState } from 'react'


/*
  To make the code cleaner and more readable,
  I changed the format of the if else statement to a ternary opertator.
  - The ternary operator is a shorthand way of writing an if-else statement.
  Now the parameterized URLs can function properly.
*/

function App() {
  const location = useLocation();


        <Routes>
          <Route path="/verification" element={<Verification />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      }
    />
  );

  // Render the appropriate routes based on the current path
  return (
    <>
      {location.pathname.startsWith('/verification') ||
      location.pathname.startsWith('/login') ||
      location.pathname.startsWith('/information')
        ? loginRoutes
        : navbarRoutes}
    </>
  );
}

export default App;
