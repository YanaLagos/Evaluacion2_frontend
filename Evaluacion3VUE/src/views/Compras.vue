<template>
    <div id="app" class="container mt-5">
        <div class="row justify-content-center">
            <!-- Columna de productos -->
            <div class="col-6">
                <h2>Productos disponibles</h2>
                <ul v-for="product in products" :key="product.id" class="mb-2">
                    <li class="product-item list-unstyled">
                        <img :src="`/img/product-${product.id}.png`" alt="Imagen del producto" />
                        <span>{{ product.name }} - Precio: $ {{ product.price }}</span>
                        <div class="product-btn"> 
                            <button @click="addToCart(product)" class="btn btn-primary btn-sm ms-2">
                                <i class="fas fa-cart-shopping" aria-hidden="true"></i>
                                
                                Agregar al carrito
                            </button>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- Columna del carrito -->
            <div class="col-6">
                <h2>Productos en el carrito</h2>
                <ul v-for="item in cart" :key="item.product.id" class="mb-2">
                    <li class="cart-item list-unstyled">
                        <img :src="`/img/product-${item.product.id}.png`" alt="Imagen del producto" />
                        <span>{{ item.product.name }} - {{ item.quantity }}</span>
                        <div class="cart-btn"> 
                            <button @click="removeFromCart(item)" class="btn btn-primary btn-sm ms-2">
                                <i class="fas fa-trash" aria-hidden="true"></i>
                                Remover del carrito
                            </button>
                                
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <hr />

        <!-- Total del carrito -->
        <p class="pb-5 fs-4"><strong>Total a pagar:</strong> {{ total }}</p>

        <!-- Modal stock -->
        <div
            class="modal fade"
            id="stockModal"
            tabindex="-1"
            aria-labelledby="stockModalLabel"
            aria-hidden="true"
            ref="stockModal"
            >
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title" id="stockModalLabel">Atención</h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Cerrar"
                            ></button>
                    </div>

                    <div class="modal-body">
                        No hay más unidades disponibles de este producto.
                    </div>

                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                            >
                            Aceptar
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    data() {
        return {
            products: [
                { id: 1, name: 'Audífonos', price: 30000, stock: 3 },
                { id: 2, name: 'Mouse', price: 20000, stock: 5 },
                { id: 3, name: 'Teclado', price: 15000, stock: 10 },
                { id: 4, name: 'Gabinete', price: 35000, stock: 4 },
                { id: 5, name: 'Monitor', price: 175000, stock: 3 },
                { id: 6, name: 'Silla', price: 150000, stock: 2 }
            ],
            cart: []
        };
    },
            computed: {
                total() {
                    return this.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
        }
    },
            methods: {
                addToCart(product) {
                    let cartItem = this.cart.find(item => item.product.id === product.id);
            if (cartItem) {
                if (cartItem.quantity < product.stock) {
                    cartItem.quantity++;
                } else {
                    alert('No hay más stock disponible para este producto');
                }
            } else {
                if (product.stock > 0) {
                    this.cart.push({ product: product, quantity: 1 });
                } else {
                    alert('Producto sin stock');
                }
            }
        },
        
    removeFromCart(item) {
      let index = this.cart.indexOf(item);
      if (index !== -1) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          this.cart.splice(index, 1);
        }
      }
    }
  }
};
</script>

<style scoped>

    img {
        height: 60px;
        margin-right: 10px;
    }
    
    
</style>
