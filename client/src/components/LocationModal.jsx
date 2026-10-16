import { useEffect, useState } from "react";
import { Search, X, LocateFixed } from "lucide-react";
import {
  getCities,
  searchCities,
  getPopularCities,
} from "../Services/api/cityApi";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function LocationModal({
  isOpen,
  onClose,
  onSelectCity,
}) {
  const [cities, setCities] = useState([]);
  const [popularCities, setPopularCities] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch all/search cities
  useEffect(() => {
    if (!isOpen) return;

    let cancelled = false;

    const fetchCities = async () => {
      setLoading(true);
      setError("");

      try {
        const result = search.trim()
          ? await searchCities(search.trim())
          : await getCities(selectedLetter);

        if (!cancelled) {
          setCities(result.data.cities || []);
        }
      } catch (err) {
        if (!cancelled) {
          setError("Cities load nahi ho paayi. Backend check karo.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchCities();

    return () => {
      cancelled = true;
    };
  }, [isOpen, search, selectedLetter]);

  // Fetch popular cities
  useEffect(() => {
    let cancelled = false;

    const fetchPopularCities = async () => {
      try {
        const response = await getPopularCities();

        if (!cancelled) {
          setPopularCities(response.data.cities || []);
        }
      } catch (err) {
        console.error("Failed to fetch popular cities:", err);
      }
    };

    fetchPopularCities();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!isOpen) return null;

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setSearch("");
  };

  const handleCitySelect = (city) => {
    onSelectCity(city);
    onClose();
  };

  const getCityName = (city) =>
    city.cityName || city.city_name || city.name || "";

  const getStateName = (city) =>
    city.stateName || city.state_name || "";

  const getCityKey = (city) =>
    city.cityKey || city.city_key || city.city_id || getCityName(city);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="location-modal-title"
        className="relative flex max-h-[90vh] w-full max-w-[1200px] flex-col overflow-hidden rounded-[28px] bg-white shadow-2xl sm:max-h-[92vh]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-6 sm:px-10 sm:pt-8">
          <h2
            id="location-modal-title"
            className="text-xl font-semibold text-[#545459] sm:text-2xl"
          >
            Select Location
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close location selector"
            className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
          >
            <X size={24} />
          </button>
        </div>

        {/* Search */}
        <div className="px-5 pt-5 sm:px-10">
          <div className="flex h-[56px] items-center gap-3 rounded-xl border border-[#D7D7DC] px-4 transition focus-within:border-[#6444e4] focus-within:ring-2 focus-within:ring-[#6444e4]/15">
            <Search className="h-5 w-5 shrink-0 text-[#8b8b93]" />

            <input
              type="text"
              placeholder="Search city, area or locality"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setSelectedLetter("");
              }}
              className="h-full w-full bg-transparent text-base text-[#131316] outline-none placeholder:text-[#a0a0a6] sm:text-lg"
            />

            {search && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setSelectedLetter("A");
                }}
                aria-label="Clear search"
                className="text-gray-400 hover:text-gray-700"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Current Location */}
        <div className="px-5 pt-5 sm:px-10">
          <button
            type="button"
            onClick={() => {
              onClose();
            }}
            className="inline-flex items-center gap-3 rounded-lg py-1 text-left text-base font-semibold text-[#131316] transition hover:text-[#6444e4]"
          >
            <LocateFixed className="h-6 w-6 text-[#6444e4]" />
            Use Current Location
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="min-h-0 flex-1 overflow-y-auto pb-6">
          {/* Popular Cities */}
          {!search.trim() && popularCities.length > 0 && (
            <section className="px-5 pt-6 sm:px-10">
              <h3 className="mb-4 text-lg font-semibold text-[#545459] sm:text-xl">
                Popular Cities
              </h3>

              <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                {popularCities.map((city) => {
                  const cityName = getCityName(city);
                  const stateName = getStateName(city);
                  const image =
  city.city_image ||
  city.cityImage ||
  city.city_light_image ||
  city.cityLightImage;


                  return (
                    <button
                      key={getCityKey(city)}
                      type="button"
                      onClick={() => handleCitySelect(city)}
className="group overflow-hidden rounded-xl border border-[#00000014] bg-[#f3f0ff] text-left transition hover:border-[#6444e4] hover:shadow-md"
                    >
                      {image ? (
  <div className="flex h-16 w-full items-center justify-center bg-[#f3f0ff] sm:h-20">
    <img
      src={image}
      alt={cityName}
      className="h-full w-full object-contain"
      loading="lazy"
    />
  </div>
) : (
  <div className="flex h-16 items-center justify-center bg-[#eae5ff] sm:h-20">
    <LocateFixed
      size={24}
      strokeWidth={1.5}
      className="text-[#6444e4]"
    />
  </div>
)}

                      <div className="p-2 sm:p-2.5">
                        <p className="text-sm font-medium text-[#545459] sm:text-base">
                          {cityName}
                        </p>

                        {stateName && (
                          <p className="text-xs text-[#77777e] sm:text-sm">
                            {stateName}
                          </p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          )}

          <section className="px-5 pt-7 sm:px-10 sm:pt-8">
            <h3 className="text-lg font-semibold text-[#545459] sm:text-xl">
              {search.trim() ? "Search Results" : "All Cities"}
            </h3>
          </section>

          {/* Alphabet Filter */}
          {!search.trim() && (
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 px-5 pt-4 sm:gap-x-4 sm:px-10">
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  type="button"
                  onClick={() => handleLetterClick(letter)}
                  className={`text-sm font-medium transition sm:text-base ${
                    selectedLetter === letter
                      ? "text-[#6444e4]"
                      : "text-[#77777e] hover:text-[#6444e4]"
                  }`}
                >
                  {letter}
                </button>
              ))}

              <button
                type="button"
                onClick={() => handleLetterClick("")}
                className={`text-sm font-medium transition sm:text-base ${
                  selectedLetter === ""
                    ? "text-[#6444e4]"
                    : "text-[#77777e] hover:text-[#6444e4]"
                }`}
              >
                All
              </button>
            </div>
          )}

          {/* City Results */}
          <div className="px-5 pt-4 sm:px-10">
            {loading && (
              <p className="py-6 text-center text-sm text-[#77777e]">
                Loading cities...
              </p>
            )}

            {!loading && error && (
              <p className="py-6 text-center text-sm text-red-500">
                {error}
              </p>
            )}

            {!loading && !error && cities.length === 0 && (
              <p className="py-6 text-center text-sm text-[#77777e]">
                No cities found.
              </p>
            )}

            {!loading && !error && cities.length > 0 && (
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
                {cities.map((city) => (
                  <button
                    key={getCityKey(city)}
                    type="button"
                    onClick={() => handleCitySelect(city)}
                    className="min-w-0 rounded-lg py-2 text-left text-sm text-[#545459] transition hover:bg-[#eae5ff] hover:text-[#6444e4] sm:text-base"
                  >
                    <span className="block truncate">
                      {getCityName(city)}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
