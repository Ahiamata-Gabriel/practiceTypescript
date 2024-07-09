const render = (document: unknown) => {
  if (typeof document === "string") {
    document.toUpperCase();
  }
};

// NB: USING THE UNKNOWN TYPE IS PREFFERED TO USING THE ANY TYPE
//     BECAUSE THE COMPILER FORCES THE DEVELOPER TO DO SOME TYPE
//     CHECKING TO MAKE SURE THE METHODS WE ARE CALLING EXIST ON
//     THE TARGET OBJECT
