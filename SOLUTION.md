# SOLUTION

## Estimation

Estimated: 4 hours

Spent: 3.2 hours

## Solution

### Improvements

- published property? I would want to know what this is user for, because the story provided would fail if i filtered by published: false out. But should none published products be shown? (30mins)
- I have't implemented the pageination feature. I would may look to implement this with a infinite scroll feature, but it depends on the use case, future growth strategy, and product (1hour)
- implement a button component for product cards. (30mins)
- sorting functionality (30mins)
- keyword search functionality. (30mins)
- subsciption filter is a bit clunky. I would look to implement a more user friendly filter, such as a toggle switch. (30mins)
- show the number of products returned from the filter. (15mins) --not sure why I didn't do this anyway :-/
- Display "subscription" and the discount. I'd need clarification on the discount value. I assume its a percentage but wouldn't want to calculate a number without knowing I'm showing the right value (30mins)
- scheme.org markup for SEO (30mins)
- ux improvements (2hour)
  -- hover states on product cards
  -- improve styles on tags
  -- make the whole product card clickable
  -- make the filter sidebar sticky on desktop
  -- hook a filter button to the bottom of the page on mobile devices, that loads a modal with the filter options.
- change urls on the filteration, so that they are shareable. (30mins)
- when no products are returned, display a more user friendly message, and button to reset the filters. (30mins)

#### Unable to quantify improvements

- I would want to have a different way of pulling tags if the catalog size was larger, as the current implementation would be slow. Would ideally want an endpoint that returns all tags, and then filter the products based on the tags.
- Similarly with the price sliders upper limit, i currently have a magic number.
- Tags would be better if they were seperated out based on the context e.g. Pet Type, Product Type

#### Improvements with NextJS

ideally I would use NextJS for this project, as it would allow me to use server side rendering, and also have a static site for the products page. This would allow for a faster initial load time, and also allow for better SEO. (1hour)

- I would also want to have a different way of pulling the thumbnail image, as the current implementation would be slow. In a NextJS implementation I would use Next/Image lazy load and pull images at the correct size, and correct format. (15mins)

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
