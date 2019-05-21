import * as React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { Store } from "../../ducks";
import {
  actions as productActions,
  AsyncProducts
} from "../../ducks/product.reducer";
import { PENDING, SUCCESS, FAILURE } from "../../ducks/redux.types";
import { colors } from "../../styles/base";
import Error from "../../components/Error";

interface IProps {
  products: AsyncProducts;
  fetchProducts: () => void;
}

const AddProduct: React.FC<IProps> = ({ products, fetchProducts }) => {
  React.useEffect(() => {
    fetchProducts();
  }, []);
  const isFetching = products.status === PENDING;
  const hasData = products.status === SUCCESS && products.data;
  const error = products.status === FAILURE;
  return (
    <View style={{ flex: 1, margin: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: "600" }}>Add Product</Text>
      <View style={{ margin: 10 }}>
        {isFetching && <ActivityIndicator size="large" color={colors.grey} />}
        {/* 
      {hasData && (
        <FlatList
          data={orders.data}
          renderItem={({ item }) => <OrderRowContainer order={item} />}
          keyExtractor={order => order.id}
        />
      )} */}

        {error && <Error message={products.error!.message} />}
      </View>
    </View>
  );
};

const mapStateToProps = (state: Store) => ({
  products: state.products
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchProducts: () => dispatch(productActions.fetchProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct);
