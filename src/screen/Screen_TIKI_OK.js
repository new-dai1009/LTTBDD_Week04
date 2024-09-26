import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from "react-native";

export default Screen_Tiki_OK = () => {
    const  [price] = useState(141800);
    const [isDiscount, setDiscount] = useState(false);
    const [quantity, setQuantity] = useState(1);
      
    const totalPrice = isDiscount ? price * quantity * 0.9  : price * quantity;

    
    const  handleQuantity = () => {
        setQuantity(preveQuantity => preveQuantity + 1);
    }
    const hanDecreaseQuantity = () => {
        if(quantity > 1)
        setQuantity(preveQuantity => preveQuantity - 1);
    }
    const handleDiscount  = () => {
        if(!isDiscount){
            alert("Discount 10% applied")
            setDiscount(true);
        }else{
            alert("Discount already applied")

        }
        
    }

    const Order =  () => {
        alert("Order Success");
        setQuantity(1),
        setDiscount(false);

    }



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.productContainer}>
        <Image source={require('../img/book.jpg')} style={styles.img} />
        <View style={styles.productDetails}>
          <Text style={styles.title}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.provider}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.price}>141.800đ</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={hanDecreaseQuantity}>
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <TextInput style={styles.quantityInput} 
            editable={false}
            value={String(quantity)}
            />
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityText} onPress={handleQuantity}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.laterButton}>Mua sau</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.couponContainer}>
        <Text style={styles.couponText}>Mã giảm giá đã lưu</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Xem tại đây</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.discountContainer}>
        <View style={styles.discountBox}>
          <View style={styles.discountBadge}></View>
          <Text style={styles.discountText}>Mã giảm giá: 10%</Text>

        </View>
        <TouchableOpacity style={styles.applyButton} onPress={handleDiscount}>
          <Text style={styles.applyButtonText}>Áp dụng</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      <View style={styles.giftCardContainer}>
        <Text style={styles.giftCardText}>Bạn có phiếu quà tặng Tiki/Go it/Urbox</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Nhập tại đây</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Tạm tính</Text>
        <TextInput style={styles.summaryInput} 
            editable={false}
            value={totalPrice.toLocaleString("vi-VN") + " đ"} 
        />
      </View>

      <View style={styles.separator} />

      <View style={styles.totalContainer}>
        <View style={styles.totalDetails}>
          <Text style={styles.totalText}>Thành tiền</Text>
          <TextInput style={styles.totalInput}
                editable={false}
                value={totalPrice.toLocaleString("vi-VN") + " đ"}
           />
        </View>
        <TouchableOpacity style={styles.orderButton} onPress={Order}>
          <Text style={styles.orderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  productContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  img: {
    width: 130,
    height: 150,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  productDetails: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  provider: {
    fontSize: 14,
    color: "#666",
  },
  price: {
    fontSize: 20,
    color: "red",
    marginTop: 10,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  quantityButton: {
    width: 30,
    height: 30,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityInput: {
    width: 50,
    height: 30,
    borderWidth: 1,
    borderColor: "#ddd",
    textAlign: "center",
    marginHorizontal: 10,
    borderRadius: 5,
  },
  laterButton: {
    color: "#134FEC",
    fontSize: 16,
    marginLeft: 20,
  },
  couponContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  couponText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "#134FEC",
    fontSize: 16,
  },
  discountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  discountBox: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
  },
  discountBadge: {
    width: 30,
    height: 30,
    backgroundColor: "yellow",
    borderRadius: 5,
  },
  discountText: {
    fontSize: 16,
    marginLeft: 10,
  },
  applyButton: {
    width: "30%",
    height: 40,
    backgroundColor: "#0A5EB7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  applyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  separator: {
    height: 10,
    backgroundColor: "#ddd",
    marginVertical: 20,
  },
  giftCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  giftCardText: {
    fontSize: 16,
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 16,
  },
  summaryInput: {
    width: 100,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 5,
    borderRadius: 5,
  },
  totalContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  totalDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalInput: {
    width: 150,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 5,
    borderRadius: 5,
  },
  orderButton: {
    width: "80%",
    height: 50,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
  },
  orderButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
