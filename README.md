# data-exporter

A utility library for exporting data to various file formats (Excel, CSV, JSON).

## Installation

```bash
bun install data-exporter
# or
npm install data-exporter
```

## Usage

```typescript
import { exportToFile } from 'data-exporter';

// Export data to Excel
const data = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 }
];

// Export to different formats based on file extension
await exportToFile(data, 'users.excel'); // Excel
await exportToFile(data, 'users.csv');   // CSV
await exportToFile(data, 'users.json');  // JSON
```

## Supported Export Types

- `excel` - Exports data to Excel format
- `csv` - Exports data to CSV format
- `json` - Exports data to JSON format

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/targoninc/data-exporter.git
cd data-exporter

# Install dependencies
bun install
```

### Build

```bash
bun run build
```

This will:
1. Build the TypeScript files using Bun
2. Generate TypeScript declaration files
3. Output everything to the `dist` directory

### Automated Build Process

This project uses GitHub Actions for automated builds:

1. **Version Bump**: Automatically increments the patch version on every push to the main branch
2. **Release**: Publishes the package to npm when a new version tag is pushed

## License

MIT
