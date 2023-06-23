import { format, extractPx } from './utils'

describe('format', () => {
  it('returns empty string for no names defined', () => {
    expect(format(undefined, undefined, undefined)).toEqual('')
  })

  it('formats just first names', () => {
    expect(format('Joseph', undefined, undefined)).toEqual('Joseph')
  })

  it('formats first and last names', () => {
    expect(format('Joseph', undefined, 'Publique')).toEqual('Joseph Publique')
  })

  it('formats first, middle and last names', () => {
    expect(format('Joseph', 'Quincy', 'Publique')).toEqual(
      'Joseph Quincy Publique',
    )
  })
})

describe('extractPx', () => {
  it('given the argument 1rem, it should return 16px', () => {
    expect(extractPx('1rem')).toEqual('16px')
  })
})
