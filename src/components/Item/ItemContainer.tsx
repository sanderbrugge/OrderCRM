import * as React from "react";
import { Item } from "../../api/Order/order";
import { View, Text } from "react-native";
import ItemStyles from "./Item.styles";
import ItemInformation from "./ItemInformation";
import { getProductById } from "../../api/Product/product.services";
import { Product } from "../../api/Product/product";
import { formatPrice } from "../../util/formatNumber";
import OrderButton from "../OrderButton";
import { Icons } from "react-native-fontawesome";
import { colors } from "../../styles/base";

interface IProps {
  item: Item;
}

/**
 * Overview of an item
 * @param param0 the item to display
 */
const ItemContainer: React.FC<IProps> = ({ item }) => {
  const [product, setProduct] = React.useState<Product | undefined>(undefined);
  const productName = product ? product.description : item["product-id"];
  React.useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await getProductById(item["product-id"]);
        setProduct(data);
      } catch (error) {
        console.log(error);
        // can be used for additional error handling
      }
    };
    fetchProductData();
  }, []);
  return (
    <View style={ItemStyles.container}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 4 }}>
          <Text style={ItemStyles.productName}>{productName}</Text>
          <Text style={ItemStyles.productId}>{item["product-id"]}</Text>
        </View>
        <View style={{ marginRight: 20 }}>
          <OrderButton
            icon={Icons.trash}
            onClick={() => console.log("removing")}
            color={colors.red}
          />
        </View>
      </View>
      <View style={ItemStyles.overviewContainer}>
        <ItemInformation title="QUANTITY" info={item.quantity} />
        <ItemInformation
          title="UNIT PRICE"
          info={formatPrice(item["unit-price"])}
        />
        <ItemInformation title="TOTAL" info={formatPrice(item.total)} />
      </View>
    </View>
  );
};

export default ItemContainer;
