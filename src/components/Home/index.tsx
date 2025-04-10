import { useReducer } from "react";
import style from "./Home.module.css";
import { REQUEST } from "../../constants";
import AdvancedSearchModal from "../AdvancedSearchModal";
import StoresModal from "../StoresModal";
import Stack from "../Stack";
import Input from "../Input";
import Button from "../Button";
import ProductsList from "../ProductsList";
import { Action, ActionKind, initialStateType } from "../../types";

const initialState = {
  products: [],
  request: REQUEST.DEFAULT,
  search: "",
  selectedProduct: null,
  isAdvancedSearch: false,
};

const ACTION = {
  LOADING_SET: "LOADING_SET",
  ERROR_SET: "ERROR_SET",
  PRODUCTS_FETCHED: "PRODUCTS_FETCHED",
  SEARCH_CHANGED: "SEARCH_CHANGED",
  PRODUCT_SELECTED: "PRODUCT_SELECTED",
  ADVANCED_SEARCH_SET: "ADVANCED_SEARCH_SET",
};

function reducer(state: initialStateType, action: Action) {
  switch (action.type) {
    case ACTION.SEARCH_CHANGED:
      return { ...state, search: action.payload };

    case ACTION.LOADING_SET:
      return { ...state, request: REQUEST.LOADING };

    case ACTION.ERROR_SET:
      return { ...state, request: REQUEST.ERROR };

    case ACTION.PRODUCTS_FETCHED:
      return { ...state, products: action.payload, request: REQUEST.SUCCESS };

    case ACTION.PRODUCT_SELECTED:
      return { ...state, selectedProduct: action.payload };

    case ACTION.ADVANCED_SEARCH_SET:
      return { ...state, isAdvancedSearch: action.payload };

    default:
      return state;
  }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async (filter: Record<string, string>) => {
    dispatch({
      type: ActionKind.LOADING_SET,
    });

    const params = new URLSearchParams(filter);

    try {
      const response = await fetch(`/api/products?${params.toString()}`);
      const data = await response.json();
      console.log({ data });
      dispatch({
        type: ActionKind.PRODUCTS_FETCHED,
        payload: data,
      });
    } catch (e) {
      if (e instanceof Error) {
        // show error message
        dispatch({ type: ActionKind.ERROR_SET, payload: e.message });
      } else {
        // show a generic error message
        dispatch({
          type: ActionKind.ERROR_SET,
          payload: "An unknown error occurred",
        });
      }
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetchProducts({ search: state.search });
  }

  return (
    <div className={style.home}>
      {!state.selectedProduct ? null : (
        <StoresModal
          product={state.selectedProduct}
          onClose={() =>
            dispatch({ type: ActionKind.PRODUCT_SELECTED, payload: null })
          }
        />
      )}
      {!state.isAdvancedSearch ? null : (
        <AdvancedSearchModal
          onSubmit={(filter) => fetchProducts(filter)}
          onClose={() =>
            dispatch({ type: ActionKind.ADVANCED_SEARCH_SET, payload: false })
          }
        />
      )}
      <Stack gap={55} align="stretch">
        <h1 className={style.title}>Products Finder</h1>
        <form className={style.form} onSubmit={handleSubmit}>
          <Input
            placeholder="Search..."
            onChange={(e) =>
              dispatch({
                type: ActionKind.SEARCH_CHANGED,
                payload: e.target.value,
              })
            }
            name="search"
            value={state.search}
          />
          <div className={style.buttonsContainer}>
            <Button type="submit" disabled={!state.search}>
              Search
            </Button>
            <Button
              type="button"
              isPrimary={false}
              onClick={() => {
                dispatch({
                  type: ActionKind.ADVANCED_SEARCH_SET,
                  payload: true,
                });
              }}
            >
              Advanced search
            </Button>
          </div>
        </form>
        <Stack gap={16} align="stretch">
          <ProductsList
            request={state.request}
            products={state.products}
            onProductClick={(product) => {
              dispatch({
                type: ActionKind.PRODUCT_SELECTED,
                payload: product,
              });
            }}
          />
        </Stack>
      </Stack>
    </div>
  );
}

export default Home;
