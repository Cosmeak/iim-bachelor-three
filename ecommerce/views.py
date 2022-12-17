from django.shortcuts import render, redirect
from .models import Product
from .forms import ProductForm


def index(request):
	"""Display all products store in database
	"""
	return render(request, 'index.html', {
		'products': Product.objects.all()
	})


def create(request):
	"""Display form to create a new product
	"""
	return render(request, 'form.html', {
		'form': ProductForm
	})


def store(request):
	"""Store in database the new product send by form in create function
	"""
	form = ProductForm(request.POST)
	if form.is_valid():
		form.save()
	return redirect(index)


def show(request, id:int):
	"""Show on product based on his id
	"""
	return render(request, 'show.html', {
		'product': Product.objects.get(id=id)
	})


def edit(request, id:int):
	"""Show edit form for a specific product
	"""
	product = Product.objects.get(id=id)
	return render(request, 'form.html', {
		'form': ProductForm(product),
		'product': product
	})


def update(request, id:int):
	"""Update in database a specific product send with the edit form
	"""
	product = Product.objects.get(id=id)
	form = ProductForm(request.POST)
	return redirect(show, args=(product.id))


def delete(request, id:int):
	"""Delete a product from the database with his id
	"""
	Product.objects.delete(id=id)
	return redirect(index)
