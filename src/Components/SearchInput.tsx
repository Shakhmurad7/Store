
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo() {

  return (
    <Stack spacing={2} sx={{ width:'100%' }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
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
      />
      
    </Stack>
  );
}

const top100Films = [
  { title: 'Ehtiyat hissələri', year: 1994 },
  { title: 'Mühərriklər', year: 1972 },
  { title: 'Təkərlər', year: 1974 },
  { title: 'Elektronika', year: 2008 },
  { title: 'Alətlər', year: 1957 },
  { title: "Aksesuarlar", year: 1993 },
];