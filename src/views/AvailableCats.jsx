import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Maine Coon' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Persian' },
  { name: 'Luna', age: '4', breed: 'Siamese' },
  { name: 'Simba', age: '2', breed: 'Maine Coon' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [filteredCats, setFilteredCats] = useState([]);
  const [loading, setLoading] = useState(true);

  const uniqueBreeds = ['All', ...new Set(availableCats.map((cat) => cat.breed))];

  useEffect(() => {
    const fetchCatImages = async () => {
      try{
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0]?.url || 'https://via.placeholder.com/300?text=No+Image',
        }));

        setCats(catsWithImages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cat images:', error);
        setLoading(false);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    let filtered = cats;

    if (searchTerm) {
      filtered = filtered.filter((cat) =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedBreed !== 'All') {
      filtered = filtered.filter((cat) => cat.breed === selectedBreed);
    }

    setFilteredCats(filtered);
  }, [cats, searchTerm, selectedBreed]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {/* Filters */}
      <div className="filters d-flex justify-content-center align-items-center mb-4">
        <input
          type="text"
          className="form-control me-3"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ maxWidth: '300px' }}
        />
        <select
          className="form-select"
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
          style={{ maxWidth: '200px' }}
        >
          {uniqueBreeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>

      {/* Loading State */}
      {loading ? (
        <p>Loading cats...</p>
      ) : (
        <div className="mt-2 row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {filteredCats.length > 0 ? (
            filteredCats.map((cat, i) => (
              <div key={i} className="col">
                <div className="card h-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="card-img-top"
                    style={{
                      borderRadius: '8px',
                      height: '200px',
                      objectFit: 'cover',
                    }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{cat.name}</h5>
                    <p className="card-text mb-1">Age: {cat.age}</p>
                    <p className="card-text">Breed: {cat.breed}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <p>No cats found matching your criteria.</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
