# Investment Calculator

A simple web application built with [Angular](https://angular.dev/) that helps you calculate the growth of your investments over time.

P.s.: This project is a result of [Angular - The Complete Guide (2025 Edition)](https://www.udemy.com/course/the-complete-guide-to-angular-2/) course.

## Features

- Input initial investment, annual investment, expected return, and duration
- See yearly breakdown of interest earned, total invested, and total value
- Responsive UI with modern styling

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Angular CLI](https://angular.dev/tools/cli) (`npm install -g @angular/cli`)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/investment-calculator.git
cd investment-calculator
npm install
```

### Development Server

Start the local server:

```bash
ng serve
```

Visit [http://localhost:4200/](http://localhost:4200/) in your browser.

### Building

To build the project for production:

```bash
ng build
```

The output will be in the `dist/` directory.

### Running Unit Tests

To execute unit tests:

```bash
ng test
```

## Project Structure

```
src/
  app/
    calculator-form/   # Form for investment input
    header/            # App header
    result/            # Results table
    shared/            # Shared components and models
  main.ts              # App bootstrap
  index.html           # Main HTML file
  styles.css           # Global styles
public/                # Static assets
```

## Contributing

Pull requests are welcome! For major changes, please open an issue first.

## License

[MIT](LICENSE)
