
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../../Page/JetSkis/index.module.scss'

type Film = {
  title: string;
  item: string;
};

type FreeSoloProps = {
  onSearch: (value: string | null) => void;
};

const FreeSolo: React.FC<FreeSoloProps> = ({ onSearch }) => {
  const handleSearch = (value: string | null) => {
    onSearch(value);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.item)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
        onChange={( _ ,  value) => handleSearch(value)}
      />
    </Stack>
  );
};

const top100Films: Film[] = [
  { title: 'Ehtiyat hissələri', item: 'SpareParts' },
  { title: 'Mühərriklər', item: 'Engines' },
  { title: 'Təkərlər', item: 'JetSki' },
  { title: 'Elektronika', item: 'Snowmobiles' },
  { title: 'Alətlər', item: 'Boats' },
  { title: 'Aksesuarlar', item: 'Atv' },
];

type SearchProps = {};

const Search: React.FC<SearchProps> = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSearch = (value: string | null) => {
    setSelectedItem(value);
  };

  const handleButtonClick = () => {
    if (selectedItem) {
      console.log(selectedItem);
    }
  };

  return (
    <div className={style['search-container']}>
      <div className={style['search-input']}>
        <FreeSolo onSearch={handleSearch} />
        <Link to={`./${selectedItem}`}>
          <button onClick={handleButtonClick}>Axtar</button>
        </Link>
      </div>
    </div>
  );
};

export default Search;




