import { View, Text } from "react-native";
import React from "react";
import { useLocationStore } from "@/store";
import RideLayout from "@/components/RideLayout";

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore();

  return (
    <RideLayout title="Ride">
      <View></View>
    </RideLayout>
  );
};

export default FindRide;
