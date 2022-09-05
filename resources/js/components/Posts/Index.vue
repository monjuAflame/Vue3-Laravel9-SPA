<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
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
                        @pagination-change-page="getPosts"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from "vue";
import usePosts from "../../composable/post";

export default {
    setup() {
        const { posts, getPosts } = usePosts();
        onMounted(getPosts);

        return { posts, getPosts };
    },
};
</script>
