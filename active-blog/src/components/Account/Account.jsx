import React from "react";
import { FormControl, FormLabel, Grid, Input } from "@chakra-ui/react";
import { Button, Text, ButtonGroup } from "@chakra-ui/react";
import "./Account.css";

const Account = () => {
  return (
    <div>
      <Text as='b' fontSize="4xl"  className="alex">Account Settings</Text>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={8} 
      >
        <FormControl id="firstName">
          <FormLabel>First Name</FormLabel>
          <Input
            focusBorderColor="brand.red"
            type="text"
            placeholder="First Name"
          />
        </FormControl>
        <FormControl id="lastName">
          <FormLabel>Last Name</FormLabel>
          <Input
            focusBorderColor="brand.red"
            type="text"
            placeholder="Last Name"
          />
        </FormControl>
        <FormControl id="phoneNumber">
          <FormLabel>Phone Number</FormLabel>
          <Input
            focusBorderColor="brand.red"
            type="tel"
            placeholder="Cell No"
          />
        </FormControl>
        <FormControl id="emailAddress">
          <FormLabel>Email Address</FormLabel>
          <Input
            focusBorderColor="brand.red"
            type="email"
            placeholder="Your Email"
          />
        </FormControl>
        <ButtonGroup gap="4">
          <Button  size="sm" variant="alex">
            Update
          </Button>
          <Button  size="sm" variant="solid">
            Cancel
          </Button>
        </ButtonGroup>
      </Grid>
    </div>
  );
};

export default Account;
