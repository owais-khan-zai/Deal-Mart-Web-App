export const useDashboardDataFetch = (countData = {}, iconArray = []) => {
  return Object.entries(countData).map(([key, val], index) => {
    let cleanName = key;

    // "total_" sirf first index par na remove karo
    if (index !== 0) {
      cleanName = cleanName.replace(/^total_?/i, "");
    }

    cleanName = cleanName
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    return {
      name: cleanName,
      value: val,
      icon: iconArray[index]?.icon || null,
    };
  });
};
