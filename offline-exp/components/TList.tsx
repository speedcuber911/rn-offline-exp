import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SectionList,
} from "react-native";
import TCard from "./TCard";

const backendTransactionData = {
  "MAY 19 2020": [
    {
      merchantId: "A2ZC95UVYCGP7H",
      transactionId: "TXNAMZ333356789",
      amount: "232.50",
      transactionStatus: "SUCCESS",
      storeName: "Arun devo",
      payerVPAHandle: "ce******01@apl",
      timestamp: 1589876919000,
      cardDisplayDate: "May 19 2020",
      cardDisplayTime: "01:58 PM",
      displayDate: "May 19 2020",
      displayTime: "01:58:39 PM",
      merchantReferenceId: "014013535414",
    },
    {
      merchantId: "A2ZC95UVYCGP7H",
      transactionId: "TXNAMZ444456730",
      amount: "35.20",
      transactionStatus: "SUCCESS",
      storeName: "Arun devo",
      payerVPAHandle: "ht******02@apl",
      timestamp: 1589876919000,
      cardDisplayDate: "May 19 2020",
      cardDisplayTime: "01:50 PM",
      displayDate: "May 19 2020",
      displayTime: "01:58:39 PM",
      merchantReferenceId: "014013535454",
    },
  ],
  "MAY 18 2020": [
    {
      merchantId: "A2ZC95UVYCGP7H",
      transactionId: "TXNAMZ123456300",
      amount: "18.10",
      transactionStatus: "SUCCESS",
      storeName: "Arun devo",
      payerVPAHandle: "ge******02@apl",
      timestamp: 1589787990000,
      cardDisplayDate: "May 18 2020",
      cardDisplayTime: "01:16 PM",
      displayDate: "May 18 2020",
      displayTime: "01:16:30 PM",
      merchantReferenceId: "013913636325",
    },
  ],
  "MAY 17 2020": [
    {
      merchantId: "A2ZC95UVYCGP7H",
      transactionId: "TXNAMZ123457804",
      amount: "42.90",
      transactionStatus: "SUCCESS",
      storeName: "Arun devo",
      payerVPAHandle: "he******09@apl",
      timestamp: 1589787990000,
      cardDisplayDate: "May 18 2020",
      cardDisplayTime: "01:16 PM",
      displayDate: "May 18 2020",
      displayTime: "01:16:30 PM",
      merchantReferenceId: "013913636335",
    },
    {
      merchantId: "A2ZC95UVYCGP7H",
      transactionId: "TXNAMZ123455555",
      amount: "27.00",
      transactionStatus: "SUCCESS",
      storeName: "Arun devo",
      payerVPAHandle: "he******09@apl",
      timestamp: 1589787990000,
      cardDisplayDate: "May 17 2020",
      cardDisplayTime: "11:32 AM",
      displayDate: "May 17 2020",
      displayTime: "11:32:30 AM",
      merchantReferenceId: "013913636325",
    },
    {
      merchantId: "A2ZC95UVYCGP7H",
      transactionId: "TXNAMZ125432789",
      amount: "100.60",
      transactionStatus: "SUCCESS",
      storeName: "Arun devo",
      payerVPAHandle: "he******09@apl",
      timestamp: 1589787990000,
      cardDisplayDate: "May 17 2020",
      cardDisplayTime: "10:30 AM",
      displayDate: "May 17 2020",
      displayTime: "10:30:30 AM",
      merchantReferenceId: "013913631327",
    },
    {
      merchantId: "A2ZC95UVYCGP7H",
      transactionId: "TXNAMZ123432189",
      amount: "120.00",
      transactionStatus: "SUCCESS",
      storeName: "Arun devo",
      payerVPAHandle: "he******09@apl",
      timestamp: 1589787990000,
      cardDisplayDate: "May 17 2020",
      cardDisplayTime: "9:26 AM",
      displayDate: "May 17 2020",
      displayTime: "9:26:30 AM",
      merchantReferenceId: "053913616321",
    },
  ],
  "MAY 15 2020": [
    {
      merchantId: "A2ZC95UVYCGP7H",
      transactionId: "TXNAMZ123456300",
      amount: "55.00",
      transactionStatus: "SUCCESS",
      storeName: "Arun devo",
      payerVPAHandle: "he******09@apl",
      timestamp: 1589787990000,
      cardDisplayDate: "May 15 2020",
      cardDisplayTime: "07:35 PM",
      displayDate: "May 15 2020",
      displayTime: "07:35:30 PM",
      merchantReferenceId: "014913636315",
    },
    {
        merchantId: "A2ZC95UVYCGP7H",
        transactionId: "TXNAMZ123456300",
        amount: "95.00",
        transactionStatus: "SUCCESS",
        storeName: "Arun devo",
        payerVPAHandle: "he******09@apl",
        timestamp: 1589787990000,
        cardDisplayDate: "May 15 2020",
        cardDisplayTime: "05:42 PM",
        displayDate: "May 15 2020",
        displayTime: "05:42:32 PM",
        merchantReferenceId: "013943636322",
      },
    ],
    "MAY 12 2020": [
      {
        merchantId: "A2ZC95UVYCGP7H",
        transactionId: "TXNAMZ123456300",
        amount: "117.00",
        transactionStatus: "SUCCESS",
        storeName: "Arun devo",
        payerVPAHandle: "ge******01@apl",
        timestamp: 1589787990000,
        cardDisplayDate: "May 12 2020",
        cardDisplayTime: "08:12 AM",
        displayDate: "May 12 2020",
        displayTime: "08:12:30 PM",
        merchantReferenceId: "013913636325",
      },
    ],
  };
  
  const TList = () => {
    const dataarray = Object.keys(backendTransactionData).map((key) => ({
      title: key,
      data: backendTransactionData[key],
    }));
    return (
      <SectionList
        sections={dataarray}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <TouchableOpacity 
          activeOpacity={0.3}
          onPress={() => (console.log())}>
            <TCard item={item} />
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View
            style={{
              height: 40,
              paddingLeft: 20,
              backgroundColor: "#fafafa",
  
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                opacity: 0.2,
                fontFamily: "AmazonEmber",
                fontSize: 13,
                fontWeight: "bold",
                fontStyle: "normal",
                letterSpacing: 0,
                color: "#373e3e",
              }}
            >
              {title}
            </Text>
          </View>
        )}
      />
    );
  };
  export default TList;
  
  const styles = StyleSheet.create({});