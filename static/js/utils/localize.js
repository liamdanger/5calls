function localize(state, textHash, textKey) {
  return textHash[state.locale][textKey];
}
