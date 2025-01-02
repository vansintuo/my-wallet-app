"use client";

import {
    ClerkProvider,
  } from '@clerk/nextjs';
  import '../globals.css';
  
  const RootLayout = ({ children }) => {
    return (
      <ClerkProvider>
        <html lang="en">
          <body>
            {children}
          </body>
        </html>
      </ClerkProvider>
    );
  };
  
  export default RootLayout;
  