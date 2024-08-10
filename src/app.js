import GameSavingLoader from './classes/GameSavingLoader';

const gameSaving = { data: undefined, error: undefined };

(async () => {
  try {
    gameSaving.data = await GameSavingLoader.load();
  } catch (error) {
    gameSaving.error = error;
  }
})();