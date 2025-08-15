import * as migration_20250802_032017_initial from './20250802_032017_initial';
import * as migration_20250815_144047 from './20250815_144047';

export const migrations = [
  {
    up: migration_20250802_032017_initial.up,
    down: migration_20250802_032017_initial.down,
    name: '20250802_032017_initial',
  },
  {
    up: migration_20250815_144047.up,
    down: migration_20250815_144047.down,
    name: '20250815_144047'
  },
];
