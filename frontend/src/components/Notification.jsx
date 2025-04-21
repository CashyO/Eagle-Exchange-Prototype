import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/joy/AccordionDetails';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import Switch from '@mui/joy/Switch';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import ListItemContent from '@mui/joy/ListItemContent';

import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
import BluetoothRoundedIcon from '@mui/icons-material/BluetoothRounded';
import TapAndPlayRoundedIcon from '@mui/icons-material/TapAndPlayRounded';
import EditNotificationsRoundedIcon from '@mui/icons-material/EditNotificationsRounded';
import AdUnitsRoundedIcon from '@mui/icons-material/AdUnitsRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import ZoomInRoundedIcon from '@mui/icons-material/ZoomInRounded';
import SpatialTrackingRoundedIcon from '@mui/icons-material/SpatialTrackingRounded';
import SettingsVoiceRoundedIcon from '@mui/icons-material/SettingsVoiceRounded';

export default function AccordionFilter() {
  return (
    <AccordionGroup
      variant="plain"
      transition="0.2s"
      sx={{
        maxWidth: 400,
        borderRadius: 'md',
        [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
          {
            paddingBlock: '1rem',
          },
        [`& .${accordionSummaryClasses.button}`]: {
          paddingBlock: '1rem',
        },
      }}
    >

      <Accordion>
        <AccordionSummary>
          <Avatar color="success">
            <EditNotificationsRoundedIcon />
          </Avatar>
          <ListItemContent>
            <Typography level="title-md">Email Notifications</Typography>
            <Typography level="body-sm">
              Enable or disable your notifications
            </Typography>
          </ListItemContent>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1.5}>
            

            <FormControl orientation="horizontal" sx={{ gap: 1 }}>
              <MessageRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
              <FormLabel>Listing Messages</FormLabel>
              <Switch size="sm" />
            </FormControl>

          </Stack>
        </AccordionDetails>
      </Accordion>
      */}
    </AccordionGroup>
  );
}
