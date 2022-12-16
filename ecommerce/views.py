from django.shortcuts import render, redirect
from .models import Product


def index(request):
	"""Display all products store in database
	"""
	return render(request, 'index.html', {
		'products': Product.objects.all()
	})


def create(request):
	"""Display form to create a new product
	"""
	return render(request, 'form.html')


def store(request):
	"""Store in database the new product send by form in create function
	"""
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
	return render(request, 'form.html', {
		'product': Product.objects.get(id=id)
	})


def update(request, id:int):
	"""Update in database a specific product send with the edit form
	"""
	return redirect(index)


def delete(request, id:int):
	"""Delete a product from the database with his id
	"""
	Product.objects.delete(id=id)
	return redirect(index)
