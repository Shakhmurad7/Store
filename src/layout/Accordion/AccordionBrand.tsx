import * as React from 'react';
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Stack } from '@mui/material';



export default function AccordionBrand() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade as AccordionSlots['transition'] }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Yeni əşyalar</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Stack sx={{flexDirection:'coulmn' , gap:3}}>
                <Stack flexDirection={{sm:'column' , md:'row'}} sx={{gap:"20px"}}>
                     <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="BRP" />
                 </FormGroup>
                 <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Spark 2" />
                 </FormGroup>
                </Stack>
                 <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Spark 3 " />
                 </FormGroup>
            </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}