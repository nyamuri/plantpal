function getPlants() {
  return JSON.parse(localStorage.getItem('plants') || '[]');
}

function savePlant(plant) {
  const plants = getPlants();
  plants.push(plant);
  localStorage.setItem('plants', JSON.stringify(plants));
}