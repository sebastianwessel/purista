import * as index from './index'
import { puristaVersion } from './version'

describe('exports redis-state-store', () => {
  it('has a version', () => {
    expect(puristaVersion).toBeDefined()
  })

  it('exports NatsStateStore', () => {
    expect(index.NatsStateStore).toBeDefined()
  })
})