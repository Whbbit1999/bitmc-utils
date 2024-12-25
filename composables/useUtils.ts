export function useUtils() {
  return ref([
    {
      title: 'Random String',
      description: 'Can create Random String for you.',
      icon: 'lucide:dices',
      to: '/utils/random-string',
    },
    {
      title: 'GenerateColors',
      description: 'Generate Colors From Base Color.',
      icon: 'lucide:palette',
      to: '/utils/generate-colors-from-base-color',
    },
    {
      title: 'Color conversion',
      description: 'Rgb - HSL - HEX ... color conversion',
      icon: 'lucide:arrow-right-left',
      to: '/utils/color-conversion',
    },
  ]);
}
