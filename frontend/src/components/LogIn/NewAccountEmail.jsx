import * as React from 'react';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import Link from '@mui/joy/Link';


export default function NewEmail() {
    return (
        <> 
                <div>
                    <Typography level="h4" component="h1">
                    <b>Email</b>
                    </Typography>
                </div>
                <FormControl>
                    <Input
                    // html input attribute
                    name="email"
                    type="email"
                    placeholder="@my.erau.edu or @erau.edu"
                />
                </FormControl>

                <Typography
                    endDecorator={<Link href="/verification">Send Code</Link>}
                    sx={{ fontSize: 'sm', alignSelf: 'center' }}
                >Verify your Email
                </Typography>

                <Typography level="body-sm">Use your current Embry-Riddle student or faculty email to create your account. A verification email will be sent to the provided address.
                </Typography>
                
                <Typography level="body-sm">
                <strong>Note:</strong> Only emails ending in <code>@my.erau.edu</code> or <code>@erau.edu</code> may be used for account verification.
                </Typography>
        
        </>
      );
}