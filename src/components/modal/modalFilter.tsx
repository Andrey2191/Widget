import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import { Filter } from "../filter/filter";
import { useAppContext } from "../context/context";
import styles from "../styles/styles";

export default function ModalFilter() {
  const { setFilterValue, setSearchlineValue } = useAppContext();

  return (
    <div style={styles.tools}>
      <TextField
        id="searchline"
        label="Search ..."
        variant="outlined"
        sx={{ width: "225px" }}
        size="small"
        onChange={(e) => setSearchlineValue(e.target.value)}
      />
      <TextField
        id="filter"
        label="Filter ..."
        variant="outlined"
        sx={{ width: "225px" }}
        size="small"
        select
        defaultValue={JSON.stringify(Filter[0].value)}
        onChange={(e) => setFilterValue(JSON.parse(e.target.value))}
      >
        {Filter.map((option, index) => (
          <MenuItem key={index} value={JSON.stringify(option.value)}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}
