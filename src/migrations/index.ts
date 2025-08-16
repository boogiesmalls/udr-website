import * as migration_20250802_032017_initial from './20250802_032017_initial'

export const migrations = [
  {
    up: migration_20250802_032017_initial.up,
    down: migration_20250802_032017_initial.down,
    name: '20250802_032017_initial',
  },
]
