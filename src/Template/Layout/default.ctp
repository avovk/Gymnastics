<!DOCTYPE html>
<html>
<head>
    <?= $this->Html->charset() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?= $this->fetch('title') ?>
    </title>
    <?= $this->Html->meta('icon') ?>

    <?= $this->Html->css('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css') ?>

    <?= $this->fetch('meta') ?>
    <?= $this->fetch('css') ?>

</head>
<body>
<?= $this->Flash->render() ?>

<?= $this->fetch('content') ?>

</body>
<?php $initValues = str_replace('\\', '\\\\', json_encode(isset($initValues) ? $initValues : array(),JSON_HEX_APOS)); ?>
<script>var initValues = JSON.parse('<?php echo $initValues  ?>');</script>
<?=$this->Html->script('//code.jquery.com/jquery-2.2.0.min.js'); ?>
<?=$this->Html->script('//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js'); ?>
<?= $this->fetch('script') ?>
</html>
