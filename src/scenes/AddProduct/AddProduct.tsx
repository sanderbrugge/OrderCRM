import * as React from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { connect } from "react-redux";
import { Store } from "../../ducks";
import {
  actions as productActions,
  AsyncProducts
} from "../../ducks/product.reducer";
import { PENDING, SUCCESS, FAILURE, UNSENT } from "../../ducks/redux.types";
import { colors } from "../../styles/base";
import Error from "../../components/Error";
import ProductItem from "../../components/Product";
import { actions as orderActions } from "../../ducks/order.reducer";
import { Item } from "../../api/Order/order";

interface IProps {
  products: AsyncProducts;
  orderId: string;
  addProduct: (orderId: string, item: Item) => void;
  fetchProducts: () => void;
}

const AddProduct: React.FC<IProps> = ({
  products,
  fetchProducts,
  orderId,
  addProduct
}) => {
  React.useEffect(() => {
    if (products.status === UNSENT) {
      fetchProducts();
    }
  }, []);

  const isFetching = products.status === PENDING;
  const hasData = products.status === SUCCESS && products.data;
  const error = products.status === FAILURE;
  return (
    <View style={{ flex: 1, margin: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: "600" }}>Add Product</Text>
      <View style={{ margin: 10 }}>
        {isFetching && <ActivityIndicator size="large" color={colors.grey} />}

        {hasData && (
          <FlatList
            data={products.data}
            renderItem={({ item }) => (
              <ProductItem
                product={item}
                orderId={orderId}
                orderProduct={addProduct}
              />
            )}
            keyExtractor={order => order.id}
          />
        )}

        {error && <Error message={products.error!.message} />}
      </View>
    </View>
  );
};

const mapStateToProps = (state: Store) => ({
  products: state.products
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchProducts: () => dispatch(productActions.fetchProducts()),
  addProduct: (orderId: string, item: Item) =>
    dispatch(orderActions.addProduct(orderId, item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct);
