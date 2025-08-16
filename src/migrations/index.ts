import * as migration_20250802_032017_initial from './20250802_032017_initial';
import * as migration_20250816_001559 from './20250816_001559';

export const migrations = [
  {
    up: migration_20250802_032017_initial.up,
    down: migration_20250802_032017_initial.down,
    name: '20250802_032017_initial',
  },
  {
    up: migration_20250816_001559.up,
    down: migration_20250816_001559.down,
    name: '20250816_001559'
  },
];
