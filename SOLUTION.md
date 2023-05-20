# SOLUTION

## Estimation

Estimated: 4 hours

Spent: x hours

## Solution

Comments on your solution

### Test Cases

#### API Error

```
Scenario: There is an error fetching products from the API
Given: The user is on the products page
When: There is an error with the GET request to /products
Then: The application should display an error message
```

#### Filtering Products by Subscription

```
Scenario: The user wants to filter products by subscription status
Given: The user is on the products page with the list of products displayed
When: The user applies a filter to show only products with subscription: true
Then: The application should make a GET request to /products?subscription=true
And: Only products with subscription: true should be displayed in the products list
```

#### No Products Returned

```
Scenario: There are no products matching the user's filter or search criteria
Given: The user has applied a filter or submitted a search
When: No products match the filter or search criteria
Then: The application should display a message indicating that no products matched the criteria
```
