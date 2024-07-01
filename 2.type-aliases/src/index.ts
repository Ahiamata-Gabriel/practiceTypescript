// using the PascalCase

type Employee = {
  readonly id: number;
  name: string;
  // method
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};
