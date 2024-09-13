function areYouPlayingBanjo(name) {
  // Implement me

  return name.slice(0, 1).toLowerCase() === 'r'
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}
console.log(areYouPlayingBanjo('efai'));
