<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <div class="mb-4">
                        <select
                            v-model="selectedCategory"
                            class="block mt-1 w-full sm:w-1/4 rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        >
                            <option value="" selected>
                                -- Filter by category --
                            </option>
                            <option
                                v-for="category in categories"
                                :value="category.id"
                            >
                                {{ category.name }}
                            </option>
                        </select>
                    </div>
                    <table class="min-w-full">
                        <thead class="bg-white border-b">
                            <tr>
                                <th
                                    scope="col"
                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                    #
                                </th>
                                <th
                                    scope="col"
                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                    Title
                                </th>
                                <th
                                    scope="col"
                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                    Content
                                </th>
                                <th
                                    scope="col"
                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                    Category
                                </th>
                                <th
                                    scope="col"
                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                    Created At
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="post in posts">
                                <td
                                    class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                                >
                                    {{ post.id }}
                                </td>
                                <td
                                    class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                                >
                                    {{ post.title }}
                                </td>
                                <td
                                    class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                                >
                                    {{ post.content }}
                                </td>
                                <td
                                    class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                                >
                                    {{ post.category }}
                                </td>
                                <td
                                    class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                                >
                                    {{ post.created_at }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <LaravelVuePagination
                        :data="posts"
                        @pagination-change-page="
                            (page) => getPosts(page, selectedCategory)
                        "
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import usePosts from "../../composable/post";
import useCategories from "../../composable/categories";

export default {
    setup() {
        const selectedCategory = ref(false);
        const { posts, getPosts } = usePosts();
        const { categories, getCategories } = useCategories();
        onMounted(() => {
            getPosts();
            getCategories();
        });

        watch(selectedCategory, (current, previous) => {
            getPosts(1, current);
        });

        return { posts, getPosts, categories, selectedCategory };
    },
};
</script>
