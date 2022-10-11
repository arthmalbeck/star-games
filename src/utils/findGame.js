export const findGameById = (id, list) => {
    const option = list.find(game => game.id === +id);
    return option || null;
}