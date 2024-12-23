export function useUtils() {
  return ref([
    {
      title: 'Random String',
      description: 'Can create Random String for you.',
      icon: 'lucide:dices',
      to: '/utils/random-string',
    },
  ]);
}
