import {React, useEffect, useMemo, useState} from 'react';
// Importing React Router Function (navigate to different pages)
import {Link} from 'react-router';
// Importing Material UI components
import {Box, Chip, IconButton, Typography} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
// Importing Material React Table components
import {MaterialReactTable} from 'material-react-table';
// Fetching Data APIs Axios
import AxiosInstance from './AxiosInstance';

// JavaScript Function 
const UserListings = () => {

  // To store the data we pull with the API
  const [myData, setMyData] = useState([])

  // Function to get data from the API
  // These are the APIs it gets data from the backend models
  const GetData = () => {

    // When linking a DB model.py DO NOT FORGET the BACKSLASH "/"
    AxiosInstance.get(`userListing/`).then((res) => {
        // it might be userListingRes
      setMyData(res.data)
    })
  }

  useEffect(() => {
    GetData()
  }, [])

  // Organizing the data 
    // accessorKey = the name of the column in the database table model
    // header = the name of the column in the table
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Listing Name',
      },
      {
        accessorKey: 'priceType_details.name',
        header: 'Exchange Type',
      },
      {
        accessorKey: 'price',
        header: 'Price'
      },
      {
        accessorKey: 'updated',
        header: 'Listing Date',
        Cell: ({cell}) => { 
          const rawData = cell.getValue();
          const formattedDate = new Date(rawData).toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
          })
          return formattedDate;
        }
      },
      {
        accessorKey: 'characteristics_names',
        header: 'Characteristics',
        Cell: ({cell}) =>(
          <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
            {
              cell.getValue()?.map((char, index) => (
                <Chip key={index} label={char} />
              ))
            }
          </div>
        )
      }      
    ]
  )


  return (
    <div>

      <Box className={"TopBar"} sx={{display:'flex', alignItems:'center'}}>
        <CalendarViewMonthIcon />
        <Typography sx={{marginLeft: '15px', fontWeight:'bold'}} variant='subtitle2'> 
          View Your Listings!
        </Typography> 
      </Box>

      <MaterialReactTable
        columns={columns}
        data={myData}
        enableRowActions
        renderRowActions={({row}) => (
          <Box sx={{display: 'flex', flexWrap: 'nowrap', gap: '8px'}}>
            {/*Don't forget the "/" before the parameterized urls because
             that is how it is declared in the app.jsx*/}
            <IconButton color="primary" component={Link} to={`/edit/${row.original.id}`}>
              <EditIcon/>
            </IconButton>

            <IconButton color="error" component={Link} to={`/delete/${row.original.id}`}>
              <DeleteIcon/>
            </IconButton>

          </Box>
        )}
      />

    </div>
  )
}

export default UserListings