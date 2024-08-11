type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends keyof AllType>(
  top: Pick<AllType, T>,
  bottom: Pick<AllType, T>
): AllType {
  return {
    name: (top as AllType).name || (bottom as AllType).name,
    position: (top as AllType).position || (bottom as AllType).position,
    color: (top as AllType).color || (bottom as AllType).color,
    weight: (top as AllType).weight || (bottom as AllType).weight,
  };
}

export {}
