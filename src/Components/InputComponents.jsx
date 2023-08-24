import React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

export default function InputComponents() {
  return (
    <div>
      Shipping Address
      <Box sx={{ width: 500 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="AddressLine"
              name="AddressLine"
              label="Address Line1 "
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="AddressLine2"
              name="AddressLine2"
              label="Address Line2 "
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="city"
              name="city"
              label="city"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="state/province/region"
              name="state/province/region"
              label="State/Province/Region"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="zip/postalcode"
              name="zip/postalcode"
              label="Zip/Postal code"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Schedule Date" />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Delivery
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="home"
                  control={<Radio />}
                  label="Home"
                />
                <FormControlLabel
                  value="office"
                  control={<Radio />}
                  label="Office"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
