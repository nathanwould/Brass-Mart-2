export type IFilterItem = {
  label: string;
  value: string;
}

export const filterCategories = {
  instrument: [
    {
      title: 'Category',
      value: 'category',
      items: [
        { label: 'Trombone', value: 'trombone' },
        { label: 'Trumpet', value: 'trumpet' },
        { label: 'Euphonium', value: 'euphonium' },
        { label: 'Tuba', value: 'tuba' },
        { label: 'Horn', value: 'horn' },
      ]
    },
    {
      title: 'Instrument Type',
      value: 'instrumentType',
      items: [
        { label: 'Alto Trombone', value: 'trombone-alto' },
        { label: 'Tenor Trombone', value: 'trombone-tenor' },
        { label: 'Bass Trombone', value: 'trombone-bass' },
        { label: 'Cornet', value: 'cornet' },
        { label: 'Mellophone', value: 'mellophone' },
        { label: 'Euphonium', value: 'euphonium' },
      ]
    },
    {
      title: "Maker",
      value: "make",
      items: [
        { label: "Conn", value: 'Conn' },
        { label: "Bach", value: 'Bach' },
        { label: "Shires", value: 'Shires' },
        { label: "Selmer", value: 'Selmer' }
      ]
    }
  ],
  accessory: [
    {
      title: 'Category',
      value: 'category',
      items: [
        { label: 'Mouthpiece', value: 'mouthpiece' },
        { label: 'Case', value: 'case' },
        { label: 'Maintenance', value: 'maintenance' },
      ]
    },
    {
      title: 'Maker',
      value: 'make',
      items: [
        { label: 'Hetman', value: 'Hetman' },
        { label: "Marcus Bonna", value: 'Marcus Bonna'}
      ]
    }
  ]
  // I'm going to figure out how to deal with this later
  // price: [
  //   { label: "Under $1,000", value: },
  //   { label: "$1,000-$2,500", value: },
  //   { label: "Over $2,500", value: }
  // ]
};